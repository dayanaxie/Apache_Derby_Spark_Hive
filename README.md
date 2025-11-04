# Apache_Spark

To try de project you must to move:

    cd spark-prototype

then there you can use:

    docker compose up -d

also 

    docker compose down --volumes --remove-orphans

    docker compose ps

    docker exec -it spark-master /opt/spark/bin/spark-submit /opt/spark-apps/main.py