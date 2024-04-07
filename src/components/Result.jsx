
import { useContext,useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';


const Container= styled(Box)`
    height: 41vh;
`;

function Result()
{
    const { html, css, js} =useContext(DataContext);

    const [src, setSrs]= useState('');

    const srcCode= `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;



    useEffect( () => {
        const timeOut= setTimeout(() => {
            setSrs(srcCode)
        }, 1000)
        return () => clearTimeout(timeOut);
    }, [html, css, js])

    return (
        <Container>
            <iframe 
                srcDoc={src}
                title="Output"
                sandbox='allow-script'
                frameBorder={0}
                width='100%'
                height="100%"
            />
        </Container>
    )
}

export default Result;