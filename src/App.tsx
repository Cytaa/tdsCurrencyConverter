import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
				<CurrencyConverter />
			</div>
		</QueryClientProvider>
	);
}

export default App;
