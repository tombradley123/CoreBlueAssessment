FROM 3.9-alpine

COPY . /root/boat-co-backend

RUN cd /root/boat-co-backend && \
pip3 install -r requirements.txt

copy app/ /app/
WORKDIR /app
ENV FLASK_APP=app.py
CMD flask run -h 0.0.0.0 -p 5000