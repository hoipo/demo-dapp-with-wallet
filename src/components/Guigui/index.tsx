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
  return (
    <div>
        <button onClick={handleConnect}>Connect</button>
    </div>
  )
}
