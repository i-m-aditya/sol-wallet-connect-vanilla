'use strict'

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// // Unpkg imports
// const Web3Modal = window.Web3Modal.default
// const WalletConnectProvider = window.WalletConnectProvider.default
// const Fortmatic = window.Fortmatic
// const evmChains = window.evmChains
const web3Solana = window.solanaWeb3
window.Buffer = buffer.Buffer

// Web3modal instance
// let web3Modal

let xlana

// Chosen wallet provider given by the dialog window
let provider

// Address of the selected account
let selectedAccount

/**
 * Setup the orchestra
 */
function init() {
    // console.log('Initializing example')
    // console.log('WalletConnectProvider is', WalletConnectProvider)
    // console.log('Fortmatic is', Fortmatic)
    console.log(
        'window.web3 is',
        window.web3,
        'window.ethereum is',
        window.ethereum
    )

    xlana = window.solana

    console.log('solana is', xlana.isPhantom)

    // // Check that the web page is run in a secure context,
    // // as otherwise MetaMask won't be available
    // if (location.protocol !== 'https:') {
    //     // https://ethereum.stackexchange.com/a/62217/620
    //     const alert = document.querySelector('#alert-error-https')
    //     alert.style.display = 'block'
    //     document
    //         .querySelector('#btn-connect')
    //         .setAttribute('disabled', 'disabled')
    //     return
    // }

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    // const providerOptions = {
    //     walletconnect: {
    //         package: WalletConnectProvider,
    //         options: {
    //             // Mikko's test key - don't copy as your mileage may vary
    //             infuraId: '8043bb2cf99347b1bfadfb233c5325c0',
    //         },
    //     },

    //     fortmatic: {
    //         package: Fortmatic,
    //         options: {
    //             // Mikko's TESTNET api key
    //             key: 'pk_test_391E26A3B43A3350',
    //         },
    //     },
    // }

    // web3Modal = new Web3Modal({
    //     cacheProvider: false, // optional
    //     providerOptions, // required
    //     disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    // })

    // console.log('Web3Modal instance is', web3Modal)
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    // Get a Web3 instance for the wallet
    // const web3 = new Web3(provider)

    // console.log('Web3 instance is', web3)

    // // Get connected chain id from Ethereum node
    // const chainId = await web3.eth.getChainId()
    // // Load chain information over an HTTP API
    // const chainData = evmChains.getChain(chainId)
    document.querySelector('#network-name').textContent = 'solana'

    // Get list of accounts of the connected wallet
    // const accounts = await web3.eth.getAccounts()

    // MetaMask does not give you all accounts, only the selected account
    // console.log('Got accounts', accounts)
    // selectedAccount = accounts[0]

    document.querySelector('#selected-account').textContent = selectedAccount

    // Get a handl
    const template = document.querySelector('#template-balance')
    // const accountContainer = document.querySelector('#accounts')

    // // Purge UI elements any previously loaded accounts
    // accountContainer.innerHTML = ''

    // // Go through all accounts and get their ETH balance
    // const rowResolvers = accounts.map(async (address) => {
    //     const balance = await web3.eth.getBalance(address)
    //     // ethBalance is a BigNumber instance
    //     // https://github.com/indutny/bn.js/
    //     const ethBalance = web3.utils.fromWei(balance, 'ether')
    //     const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4)
    //     // Fill in the templated row and put in the document
    //     const clone = template.content.cloneNode(true)
    //     clone.querySelector('.address').textContent = address
    //     clone.querySelector('.balance').textContent = humanFriendlyBalance
    //     accountContainer.appendChild(clone)
    // })

    // // Because rendering account does its own RPC commucation
    // // with Ethereum node, we do not want to display any results
    // // until data for all accounts is loaded
    // await Promise.all(rowResolvers)

    // Display fully loaded UI for wallet data
    document.querySelector('#prepare').style.display = 'none'
    document.querySelector('#connected').style.display = 'block'
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector('#connected').style.display = 'none'
    document.querySelector('#prepare').style.display = 'block'

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector('#btn-connect').setAttribute('disabled', 'disabled')
    await fetchAccountData(provider)
    document.querySelector('#btn-connect').removeAttribute('disabled')
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
    console.log('Trying to connect')
    try {
        let response = await xlana.connect()
        selectedAccount = response.publicKey.toString()

        // const connection = new solanaWeb3.Connection(
        //     'https://frosty-fabled-replica.solana-mainnet.discover.quiknode.pro/ddf29ef965c0cd3240a0843d5e462d726fb9a509/',
        //     'confirmed'
        // )

        // console.log('Connection: ', connection)
        // const toAddress = new solanaWeb3.PublicKey(
        //     '8zT9LzsjjBeQnfVZp4EYqBPLEqRt8pbqDsneFW9HyCeY'
        // )
        // const lamports = 1000000
        // const transaction = new solanaWeb3.Transaction()

        // let provider = window.phantom.solana

        // console.log('Provider: ', provider.publicKey.toString())
        // console.log('Buffer: ', window.Buffer)

        // console.log('To Addy:', toAddress)
        // console.log('system program', solanaWeb3.SystemProgram.programId)

        // const val = solanaWeb3.SystemProgram.transfer({
        //     fromPubkey: provider.publicKey,
        //     toPubkey: toAddress,
        //     lamports,
        // })

        // console.log('Val: ', val)
        // transaction.add(val)
        // console.log('Hello')

        // const blockHash = (await connection.getLatestBlockhash('finalized'))
        //     .blockhash

        // console.log('Blockhash:', blockHash)

        // transaction.recentBlockhash = blockHash
        // transaction.feePayer = provider.publicKey

        // console.log('Transaction:,', transaction)
        // const { signature } = await provider.signAndSendTransaction(transaction)

        // console.log('SIGNATURE', signature)
        // const status = await connection.getSignatureStatus(signature)
        // console.log('Signature status: ', status)
    } catch (e) {
        console.log('Could not get a wallet connection', e)
        return
    }

    // // Subscribe to accounts change
    // provider.on('accountsChanged', (accounts) => {
    //     fetchAccountData()
    // })

    // // Subscribe to chainId change
    // provider.on('chainChanged', (chainId) => {
    //     fetchAccountData()
    // })

    // // Subscribe to networkId change
    // provider.on('networkChanged', (networkId) => {
    //     fetchAccountData()
    // })

    await refreshAccountData()
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
    console.log('Killing the wallet connection', provider)

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close()

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider()
        provider = null
    }

    selectedAccount = null

    // Set the UI back to the initial state
    document.querySelector('#prepare').style.display = 'block'
    document.querySelector('#connected').style.display = 'none'
}

// async function sendMoney() {
//     const connection = new solanaWeb3.Connection(
//         'https://frosty-fabled-replica.solana-mainnet.discover.quiknode.pro/ddf29ef965c0cd3240a0843d5e462d726fb9a509/',
//         'confirmed'
//     )

//     console.log('Connection: ', connection)
//     const toAddress = new solanaWeb3.PublicKey(
//         '8zT9LzsjjBeQnfVZp4EYqBPLEqRt8pbqDsneFW9HyCeY'
//     )
//     const lamports = 1000000
//     const transaction = new solanaWeb3.Transaction()

//     let provider = window.phantom.solana

//     console.log('Provider: ', provider.publicKey.toString())
//     console.log('Buffer: ', window.Buffer)

//     console.log('To Addy:', toAddress)
//     console.log('system program', solanaWeb3.SystemProgram.programId)

//     const val = solanaWeb3.SystemProgram.transfer({
//         fromPubkey: provider.publicKey,
//         toPubkey: toAddress,
//         lamports,
//     })

//     console.log('Val: ', val)
//     transaction.add(val)
//     console.log('Hello')

//     const blockHash = (await connection.getLatestBlockhash('finalized'))
//         .blockhash

//     console.log('Blockhash:', blockHash)

//     transaction.recentBlockhash = blockHash
//     transaction.feePayer = provider.publicKey

//     console.log('Transaction:,', transaction)
//     const { signature } = await provider.signAndSendTransaction(transaction)

//     console.log('SIGNATURE', signature)
//     const status = await connection.getSignatureStatus(signature)
//     console.log('Signature status: ', status)
// }

// async function sendMoney() {
//     print('Sending money')
//     const connection = new solanaWeb3.Connection(
//       'https://frosty-fabled-replica.solana-mainnet.discover.quiknode.pro/ddf29ef965c0cd3240a0843d5e462d726fb9a509/',
//       'confirmed'
//     );
  
//     const toAddress = new solanaWeb3.PublicKey('GvAWTbuYqFFRUouTtnUrRDRX6VPRc3As6hi6KCRwj5PQ');
//     const fromAddress = window.phantom.solana.publicKey;
//     const tokenMintAddress = new solanaWeb3.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'); // Replace with your token mint address
//     const tokenAmount = 1000000; // Amount of tokens to send (in smallest unit)
  
//     const transaction = new solanaWeb3.Transaction();
//     let provider = window.phantom.solana;

//     console.log("SplToken: ", splToken);
//     console.log("From Address: ", provider.publicKey);
  
//     // Fetch associated token accounts
//     const fromTokenAccount = await splToken.getAssociatedTokenAddress(
//     splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
//     splToken.TOKEN_PROGRAM_ID,
//     tokenMintAddress,
//     fromAddress
//     );
  
//     const toTokenAccount = await splToken.getAssociatedTokenAddress(
//       splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
//       splToken.TOKEN_PROGRAM_ID,
//       tokenMintAddress,
//       toAddress
//     );
  
//     // Create the token transfer instruction
//     const transferInstruction = splToken.createTransferInstruction(
//       fromTokenAccount,
//       toTokenAccount,
//       fromAddress,
//       tokenAmount,
//       [],
//       splToken.TOKEN_PROGRAM_ID
//     );
  
//     transaction.add(transferInstruction);
  
//     const blockHash = (await connection.getLatestBlockhash('finalized')).blockhash;
  
//     transaction.recentBlockhash = blockHash;
//     transaction.feePayer = provider.publicKey;
  
//     console.log('Transaction: ', transaction);
//     const { signature } = await provider.signAndSendTransaction(transaction);
//     const status = await connection.getSignatureStatus(signature);
//     console.log('Signature status: ', status);
// }

// async function sendMoney() {
//     console.log('Sending money');
//     const connection = new solanaWeb3.Connection(
//         'https://frosty-fabled-replica.solana-mainnet.discover.quiknode.pro/ddf29ef965c0cd3240a0843d5e462d726fb9a509/',
//         'confirmed'
//     );

//     const toAddress = new solanaWeb3.PublicKey('GvAWTbuYqFFRUouTtnUrRDRX6VPRc3As6hi6KCRwj5PQ');
//     const fromAddress = window.phantom.solana.publicKey;
//     const tokenMintAddress = new solanaWeb3.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'); // Replace with your token mint address
//     const tokenAmount = 1000000; // Amount of tokens to send (in smallest unit)

//     const transaction = new solanaWeb3.Transaction();
//     let provider = window.phantom.solana;

//     console.log("SplToken: ", splToken);
//     console.log("From Address: ", provider.publicKey);

//     // Fetch associated token accounts
//     const fromTokenAccount = await splToken.getAssociatedTokenAddress(
//         splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
//         splToken.TOKEN_PROGRAM_ID,
//         tokenMintAddress,
//         fromAddress
//     );

//     console.log("From Token Account: ", fromTokenAccount);
//     const toTokenAccount = await splToken.getAssociatedTokenAddress(
//         splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
//         splToken.TOKEN_PROGRAM_ID,
//         tokenMintAddress,
//         toAddress
//     );

//     console.log("From Token Account: ", fromTokenAccount.toString());
//     console.log("To Token Account: ", toTokenAccount.toString());

//     // Check if the token accounts exist, if not, create them
//     const fromTokenAccountInfo = await connection.getAccountInfo(fromTokenAccount);
//     if (fromTokenAccountInfo === null) {
//         console.error('From token account does not exist');
//         return;
//     }

//     const toTokenAccountInfo = await connection.getAccountInfo(toTokenAccount);
//     if (toTokenAccountInfo === null) {
//         console.error('To token account does not exist, creating account');
//         const createToTokenAccountIx = splToken.createAssociatedTokenAccountInstruction(
//             provider.publicKey,
//             toTokenAccount,
//             toAddress,
//             tokenMintAddress
//         );
//         transaction.add(createToTokenAccountIx);
//     }

//     // Create the token transfer instruction
//     const transferInstruction = splToken.createTransferInstruction(
//         fromTokenAccount,
//         toTokenAccount,
//         fromAddress,
//         tokenAmount,
//         [],
//         splToken.TOKEN_PROGRAM_ID
//     );

//     transaction.add(transferInstruction);

//     const blockHash = (await connection.getLatestBlockhash('finalized')).blockhash;

//     transaction.recentBlockhash = blockHash;
//     transaction.feePayer = provider.publicKey;

//     console.log('Transaction: ', transaction);

//     // Simulate the transaction
//     const simulateResult = await connection.simulateTransaction(transaction);
//     if (simulateResult.value.err) {
//         console.error('Simulation error:', simulateResult.value.err);
//         return;
//     }

//     // Send the transaction
//     const { signature } = await provider.signAndSendTransaction(transaction);
//     const status = await connection.getSignatureStatus(signature);
//     console.log('Signature status: ', status);
// }

async function sendMoney() {
    console.log('Sending money');
    const connection = new solanaWeb3.Connection(
        'https://frosty-fabled-replica.solana-mainnet.discover.quiknode.pro/ddf29ef965c0cd3240a0843d5e462d726fb9a509/',
        'confirmed'
    );

    const toAddress = new solanaWeb3.PublicKey('GvAWTbuYqFFRUouTtnUrRDRX6VPRc3As6hi6KCRwj5PQ');
    const fromAddress = window.phantom.solana.publicKey;
    const tokenMintAddress = new solanaWeb3.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'); // Replace with your token mint address
    const tokenAmount = 10000; // Amount of tokens to send (in smallest unit)

    const transaction = new solanaWeb3.Transaction();
    let provider = window.phantom.solana;

    console.log("SplToken: ", splToken);
    console.log("From Address: ", provider.publicKey.toString());

    // Fetch associated token accounts
    const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
        connection,
        provider,
        tokenMintAddress,
        provider.publicKey
    );

    const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
        connection,
        provider,
        tokenMintAddress,
        toAddress
    );

    console.log("From Token Account: ", fromTokenAccount.toString());
    console.log("To Token Account: ", toTokenAccount.toString());

    // Check if the from token account exists, if not, create it
    // const fromTokenAccountInfo = await connection.getAccountInfo(fromTokenAccount);
    // if (fromTokenAccountInfo === null) {
    //     console.error('From token account does not exist, creating account');
    //     const createFromTokenAccountIx = splToken.createAssociatedTokenAccountInstruction(
    //         provider.publicKey,
    //         fromTokenAccount,
    //         fromAddress,
    //         tokenMintAddress
    //     );
    //     transaction.add(createFromTokenAccountIx);
    // }

    // Check if the to token account exists, if not, create it
    // const toTokenAccountInfo = await connection.getAccountInfo(toTokenAccount);
    // if (toTokenAccountInfo === null) {
    //     console.error('To token account does not exist, creating account');
    //     const createToTokenAccountIx = splToken.createAssociatedTokenAccountInstruction(
    //         provider.publicKey,
    //         toTokenAccount,
    //         toAddress,
    //         tokenMintAddress
    //     );
    //     transaction.add(createToTokenAccountIx);
    // }

    // console.log('From Token Account: ', fromTokenAccount.toString());
    // console.log('To Token Account: ', toTokenAccount.toString());

    // Create the token transfer instruction
    const transferInstruction = splToken.createTransferInstruction(
        fromTokenAccount.address,
        toTokenAccount.address,
        fromAddress,
        tokenAmount
    );

    transaction.add(transferInstruction);

    const blockHash = (await connection.getLatestBlockhash('finalized')).blockhash;

    transaction.recentBlockhash = blockHash;
    transaction.feePayer = provider.publicKey;

    console.log('Transaction: ', transaction);

    // Simulate the transaction
    const simulateResult = await connection.simulateTransaction(transaction);
    if (simulateResult.value.err) {
        console.error('Simulation error:', simulateResult.value.err.toString());
        return;
    }

    // Send the transaction
    const { signature } = await provider.signAndSendTransaction(transaction);
    const status = await connection.getSignatureStatus(signature);
    console.log('Signature status: ', status);
}
/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    init()
    document.querySelector('#btn-connect').addEventListener('click', onConnect)
    document.querySelector('#btn-send').addEventListener('click', sendMoney)
})
