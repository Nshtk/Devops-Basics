FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app
COPY ./Source ./Source
RUN dotnet publish ./Source/lab3.sln -c Release -o out

FROM mcr.microsoft.com/dotnet/runtime:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "lab3.Core.dll"]