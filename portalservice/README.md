import pandas as pd
import numpy as np
 
#Create a DataFrame
df1 = {
    'State':[' Arizona AZ ',' Georgia GG ', ' Newyork NY','Indiana IN ','Florida FL '],
   'Score':[62,47,55,74,31]}
 
df1 = pd.DataFrame(df1,columns=['State','Score'])
https://github.com/Codoc-os/django-opensearch-dsl/blob/master/tests/tests/test_search.py
print(df1)
pip install virtualenv
virtualenv env
source env\\Scripts\\activate
pip3 freeze > requirements.txt  
python manage.py startapp property
python manage.py makemigrations property
python manage.py migrate
python manage.py loaddata state
python manage.py runserver