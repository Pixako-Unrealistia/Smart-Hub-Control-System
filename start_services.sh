if [ ! -d "./mock_data/halfhourly_dataset" ]; then
	git clone https://github.com/TetraHikari/meter-dataset
	mv meter-dataset/halfhourly_dataset ./mock_data/
	rf -rf meter-dataset
	python3 ./mock_data/meter.py
fi


pnpm run dev & python3 run_services.py