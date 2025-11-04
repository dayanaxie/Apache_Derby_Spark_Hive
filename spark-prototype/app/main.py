from pyspark.sql import SparkSession

# Crear la sesión de Spark
spark = SparkSession.builder \
    .appName("DemoCSVProcessing") \
    .getOrCreate()

print("Spark iniciado correctamente")

# Leer el CSV desde el volumen compartido
df = spark.read.csv("/opt/spark-data/dataset.csv", header=True, inferSchema=True)

print("Datos cargados:")
df.show(5)

print("Conteo total de filas:", df.count())

# Ejemplo: si hay una columna "region", agrupar por ella
if "region" in df.columns:
    print("Agrupación por 'region':")
    df.groupBy("region").count().show()

spark.stop()
