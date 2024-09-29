# Smart-Hub-Control-System

NEXT JS
FastAPI
ExpressJS
Postgresql

to run u need to
-pnpm install (install modules in every services)
-init ur postgresql table (i have script in prisma/schema_setup.sql)
-clone dataset from https://www.kaggle.com/datasets/jeanmidev/smart-meters-in-london/data
-create foler 
mock_data/halfhourly_dataset  <--- put the cloned dataset in there
mock_data/individuals

run the meter.py (located in mock_data/meter.py) <--- this will separate halfhourly_dataset into smaller csv files
when running
-pnpm run dev (from ./)
-python main (run separately in meter-getter -> all the 5 folder )
