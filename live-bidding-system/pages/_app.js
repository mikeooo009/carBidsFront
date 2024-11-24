import '../styles/globals.css';
import { WebSocketProvider } from '../context/WebSocketContext';

export default function MyApp({ Component, pageProps }) {
   return (
       <WebSocketProvider>
           <Component {...pageProps} />
       </WebSocketProvider>
   );
}
