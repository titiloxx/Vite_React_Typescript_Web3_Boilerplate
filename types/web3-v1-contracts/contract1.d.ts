/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { AbiItem } from 'web3-utils'
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface Contract1 extends BaseContract {
  constructor(
    jsonInterface: AbiItem[] | AbiItem,
    address?: string,
    options?: ContractOptions
  ): Contract1;
  clone(): Contract1;
  methods: {
    contribute(): PayableTransactionObject<void>;

    contributions(arg0: string): NonPayableTransactionObject<string>;

    getContribution(): NonPayableTransactionObject<string>;

    getName(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    withdraw(): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
