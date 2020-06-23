import Head from 'next/head';

export default (props) => (
    <div>
        <Head>
            <title>ONE-ISKO</title>
        </Head>
        { props.children }
    </div>
)