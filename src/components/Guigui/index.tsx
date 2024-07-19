import React from 'react'

export const Guigui = () => {
    const handleConnect = async () => {
        console.log('connect')
        const res = await (window as any).bybitTonWallet.tonconnect.connect([
            2,
            {
                "manifestUrl": "https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json",
                "items": [
                    {
                        "name": "ton_addr"
                    }
                ]
            }
        ])
    }

    const handleRestoreConnection = async () => {
        console.log('restore connection')
        const res = await (window as any).bybitTonWallet.tonconnect.restoreConnection()
        console.log(res)
    }
  return (
    <div>
        <div><button onClick={handleConnect}>Connect</button></div>
        <div><button onClick={handleRestoreConnection}>restore connection</button></div>
    </div>
  )
}
