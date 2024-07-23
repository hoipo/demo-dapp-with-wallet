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
        const res = await (window as any).bybitTonWallet.tonconnect.send({
            method: 'sendTransaction',
            params: [{
                message: [
                    {
                        "address": "UQAprrUX54am2NDZ9UTS11Yp2UM1OATYK6XcTU3_L744Y1uW",
                        "amount": "5000"
                    }
                ]
            }], id: 0
        });
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
