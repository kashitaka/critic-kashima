import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SFZMRPY7SR" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SFZMRPY7SR');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
