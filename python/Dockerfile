FROM python:3

WORKDIR /usr/src/app

COPY . .

CMD ["python3", "-m", "unittest", "discover", "-s", "src", "-p", "'*_test.py'"]
