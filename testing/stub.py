import json
import random
from faker import Faker

fake = Faker()
data = []
for _ in range(100):
	data.append({
		'email': fake.email(),
		'password': fake.password(),
	})

with open('stub_data.json', 'w') as f:
	json.dump(data, f)