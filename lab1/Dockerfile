ARG WORKING_DIRECTORY="./Artifacts"
ARG PROGRAM="main.out"

FROM scratch

#Why TF this is not working???
COPY ${WORKING_DIRECTORY}/usr/ /usr/  


COPY ./Artifacts/usr/ /usr/
COPY ./Artifacts/usr/lib/ /lib/
COPY ./Artifacts/usr/lib64/ /lib64/
COPY ./Artifacts/main.out /

ENTRYPOINT ["/main.out"]