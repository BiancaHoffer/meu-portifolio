import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
           <Html lang="pt-br">
                <Head>
                    <meta name="author" content="Bianca Macedo Hoffer Madruga" />
                    <meta name="keywords" content="programação, portfólio, portfolio, html, css, sass, react, reactjs, react native, nextjs, next, js, ts, java script, type script" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
           </Html> 
        );
    }
}

//<meta httpEquiv="content-type" content="" />