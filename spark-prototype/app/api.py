from fastapi import FastAPI
from pyspark.sql import SparkSession
from fastapi.middleware.cors import CORSMiddleware
import traceback

app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "ok", "message": "API de Spark lista"}

@app.get("/analyze")
def analyze():
    try:
        spark = (
            SparkSession.builder
            .appName("FastAPI_Spark_Integration")
            .master("local[*]")  # usa modo local dentro del contenedor
            .config("spark.driver.bindAddress", "0.0.0.0")
            .config("spark.driver.host", "localhost")
            .getOrCreate()
        )

        df = (
            spark.read
            .option("header", True)
            .option("inferSchema", True)
            .csv("/opt/spark-data/dataset.csv")
        )

        count = df.count()
        cols = df.columns
        sample = df.limit(5).toPandas().to_dict(orient="records")

        spark.stop()
        return {
            "rows": count,
            "columns": cols,
            "sample": sample
        }

    except Exception as e:
        return {
            "error": str(e),
            "traceback": traceback.format_exc()
        }
