"use strict";

const { Managers } = require("@tycoon69-labs/crypto");
const utils = require("./utils");
const testUtils = require("../../../../lib/utils/test-utils");
const { TransactionFactory } = require('../../../../../helpers/transaction-factory');

/**
 * Attempt to spend with insufficient balance
 * @param  {Object} options = { }
 * @return {void}
 */
module.exports = async options => {
    Managers.configManager.setFromPreset("testnet");

    const transactions = [
        TransactionFactory.delegateRegistration("dummydelegate1")
            .withFee(25 * Math.pow(10, 8))
            .withPassphrase(utils.delRegSender.passphrase)
            .createOne(),
    ];

    await testUtils.POST("transactions", { transactions });
};
