import React from 'react';
		import {View} from 'react-native';
		import {Provider} from 'react-redux';

		import TaskList from './src/views/TaskList';
		import TaskRegister from './src/views/TaskRegister';
		import ConfigureStore from './src/components/Store';

		const App = () => {
			const store = ConfigureStore();
			return (
				<Provider store={store}>
					<View>
						<TaskRegister />
						<TaskList />
					</View>
				</Provider>
			);
		};

export default App;
		