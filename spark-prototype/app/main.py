# main.py
from fastapi import FastAPI
from pyspark.sql import SparkSession

app = FastAPI()

@app.get("/analyze")
def analyze_data():
    spark = SparkSession.builder.appName("DemoCSVProcessing").getOrCreate()
    df = spark.read.csv("/opt/spark-data/dataset.csv", header=True, inferSchema=True)
    result = df.groupBy("region").count().collect()
    spark.stop()
    return {"counts": [r.asDict() for r in result]}

