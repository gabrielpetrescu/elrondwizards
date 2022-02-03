import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import {
  Address,
  AddressValue,
  ContractFunction,
  Query,
  ContractCallPayloadBuilder,
  U64Value,
} from "@elrondnetwork/erdjs";
import { faArrowUp, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BigNumber from "bignumber.js";
import { contractAddress } from "config";
import { RawTransactionType } from "helpers/types";
import useNewTransaction from "pages/Transaction/useNewTransaction";
import { routeNames } from "routes";
import axios from "axios";

const Actions = () => {
  const sendTransaction = Dapp.useSendTransaction();
  const { address, dapp } = Dapp.useContext();
  const newTransaction = useNewTransaction();
  const [secondsLeft, setSecondsLeft] = React.useState<number>();
  const [hasPing, setHasPing] = React.useState<boolean>();

  const contractCallBuilder = new ContractCallPayloadBuilder().setFunction(
    new ContractFunction("mint_nft"),
  );
  let nonce = 1;
  const total_supply = 3333;
  const prime = 110503;
  let shuffled = ((nonce * prime) % total_supply) + 1;
  contractCallBuilder.addArg(new U64Value(new BigNumber(shuffled)));
  let payload = contractCallBuilder.build();

  const mount = () => {
    if (secondsLeft) {
      const interval = setInterval(() => {
        setSecondsLeft((existing) => {
          if (existing) {
            return existing - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  };
  const fetchData = async () => {
    const result = await axios(
      "https://api.elrond.com/nfts/count?collection=EWIZZ-1e8ddb",
    );
    nonce = result.data + 1;
    shuffled = ((nonce * prime) % total_supply) + 1;
    contractCallBuilder.addArg(new U64Value(new BigNumber(shuffled)));
    payload = contractCallBuilder.build();
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(mount, [hasPing]);

  React.useEffect(() => {
    const query = new Query({
      address: new Address(contractAddress),
      func: new ContractFunction("mint_nft"),
      args: [new AddressValue(new Address(address))],
    });
    fetchData();
    dapp.proxy
      .queryContract(query)
      .then(({ returnData }) => {
        const [encoded] = returnData;
        switch (encoded) {
          case undefined:
            setHasPing(true);
            break;
          case "":
            setSecondsLeft(0);
            setHasPing(false);
            break;
          default: {
            const decoded = Buffer.from(encoded, "base64").toString("hex");
            setSecondsLeft(parseInt(decoded, 16));
            setHasPing(false);
            break;
          }
        }
      })
      .catch((err) => {
        console.error("Unable to call VM query", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const send = (transaction: RawTransactionType) => (e: React.MouseEvent) => {
    e.preventDefault();
    sendTransaction({
      transaction: newTransaction(transaction),
      callbackRoute: routeNames.transaction,
    });
  };

  const mintTransaction: RawTransactionType = {
    data: payload,
    receiver: contractAddress,
    value: "0.75",
    gasLimit: 100000000,
  };
  const pongTransaction: RawTransactionType = {
    receiver: contractAddress,
    payload: "pong",
    value: "0",
    gasLimit: 10000000,
  };

  const pongAllowed = secondsLeft === 0;
  const notAllowedClass = pongAllowed ? "" : "not-allowed disabled";

  return (
    <div className="d-flex justify-content-center" style={{ margin: "none" }}>
      {hasPing !== undefined && (
        <>
          {hasPing ? (
            <div className="action-btn">
              <button onClick={send(mintTransaction)}>
                <span>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                BUY
              </button>
              {/* <a href="/" className="text-white text-decoration-none">
                Buy now
              </a> */}
            </div>
          ) : (
            <>
              <div className="d-flex flex-column">
                <div
                  {...{
                    className: `action-btn ${notAllowedClass}`,
                    ...(pongAllowed ? { onClick: send(pongTransaction) } : {}),
                  }}
                >
                  <button className={`btn ${notAllowedClass}`}>
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-primary"
                    />
                  </button>
                  <span className="text-white">
                    {pongAllowed ? (
                      <a href="/" className="text-white text-decoration-none">
                        Pong
                      </a>
                    ) : (
                      <>Pong</>
                    )}
                  </span>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Actions;
