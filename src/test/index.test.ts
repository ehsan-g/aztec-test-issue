import { TokenContractArtifact, TokenContract } from "../artifacts/Token.js"
import { AccountWallet, CompleteAddress, ContractDeployer, createDebugLogger, Fr, PXE, waitForPXE, TxStatus, createPXEClient, getContractInstanceFromDeployParams, DebugLogger } from "@aztec/aztec.js";
import { getInitialTestAccountsWallets } from "@aztec/accounts/testing"

const setupSandbox = async () => {
    const { PXE_URL = 'http://localhost:8080' } = process.env;
    const pxe = createPXEClient(PXE_URL);
    await waitForPXE(pxe);
    return pxe;
};

describe("Voting", () => {
    let pxe: PXE;
    let wallets: AccountWallet[] = [];
    let accounts: CompleteAddress[] = [];
    let logger: DebugLogger;

    beforeAll(async () => {
        logger = createDebugLogger('aztec:aztec-starter');
        logger.info("Aztec-Starter tests running.")

        pxe = await setupSandbox();

        wallets = await getInitialTestAccountsWallets(pxe);
        accounts = wallets.map(w => w.getCompleteAddress())
    })

    it("Deploys the contract", async () => {
        const salt = Fr.random();
        const ContractArtifact = TokenContractArtifact
        const [deployerWallet, adminWallet] = wallets; // using first account as deployer and second as contract admin
        const adminAddress = await adminWallet.getCompleteAddress().address;

        const deploymentData = getContractInstanceFromDeployParams(ContractArtifact,
            {
                constructorArgs: [adminAddress,
                    "TokenA",
                    "AAA",
                    18,],
                salt,
                deployer: deployerWallet.getAddress()
            });

    }, 300_000)

});