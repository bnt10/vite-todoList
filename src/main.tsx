// libaray
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

//Compoents
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
   <ReduxProvider store={store}>
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </QueryClientProvider>
      </AuthProvider>
   </ReduxProvider>,
);
