'use client'
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'

export default function Page() {

    const [scanResult, setScanResult] = useState(null)

    useEffect(()=>{
        const scanner =  new Html5QrcodeScanner('reader', {
            qrbox:{
                width: 250,
                height: 250
            }, supportedScanTypes: [
                // Html5QrcodeScanType.SCAN_TYPE_FILE, 
                Html5QrcodeScanType.SCAN_TYPE_CAMERA
            ],
            fps: 5,
            // aspectRatio: 1.7777778
        })
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result)
        }
    
        function error(err){
            console.warn(err)
        }
    })
 
  return (
    <div className='w-full h-screen'>
        <div id='reader' className=""></div>
        {scanResult ? <div className="">Success <a href={scanResult}>{scanResult}</a></div>
        :
<div className=""></div>

        }
        
    </div>
  )
}
