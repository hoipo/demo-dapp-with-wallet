import React from 'react'

export const Guigui = () => {
    const handleConnect = async () => {
        console.log('connect start')
        const res = await (window as any).bybitTonWallet.tonconnect.connect(
            2,
            {
                "manifestUrl": "https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json",
                "items": [
                    {
                        "name": "ton_addr"
                    }
                ]
            }
        )
        console.log('connect res' + JSON.stringify(res));
    }

    const handleRestoreConnection = async () => {
        console.log('restore connection start')
        const res = await (window as any).bybitTonWallet.tonconnect.restoreConnection()
        console.log('restoreConnection res' + JSON.stringify(res));
    }

    const handleTon = async () => {
        console.log('send ton')
        const res = await (window as any).bybitTonWallet.tonconnect.send(
            {
                "method": "sendTransaction",
                "params": [
                    "{\"messages\":[{\"address\":\"EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M\",\"amount\":\"1\",\"stateInit\":\"te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==\",\"payload\":\"te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==\"}],\"valid_until\":1721951711,\"from\":\"0:29aeb517e786a6d8d0d9f544d2d75629d943353804d82ba5dc4d4dff2fbe3863\",\"network\":\"-239\"}"
                ],
                "id": "0"
            }
        );
        console.log(res)
    }
    return (
        <div>
            <div><button onClick={handleConnect}>Connect</button></div>
            <div><button onClick={handleRestoreConnection}>restore connection</button></div>
            <div><button onClick={handleTon}>send ton</button></div>
        </div>
    )
}
