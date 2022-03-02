# ProjectLibrary

### CRUD simples de uma Livraria
Tecnlogias abordadas:

- API: .Net Core
- Front: React 
- Db: MSSQL

---
### Detalhes
- Alterar a ConnectionStrings do banco SQL no "appsettings", caso contrario criará o banco como "LibraryTest"
- No momento só possui 3 propriedades[id, genero, nome e conteudo] e 1 entidade ( book)

![Library](https://user-images.githubusercontent.com/54364443/156273130-b6ea3229-0741-4485-a66c-01aee0e2df5d.png)


### Pontos a melhorar
- Tratamento de erro na parte do Front
- Aumentar as propriedades do obejeto Livro (qtd de paginas, subtopicos,Data, tags) e suas complexidades de paginação e ordenação.
- Aumentar as entidades como ( usuario [leitor, bibliotecaria], localização)
- Mascaramento das urls
- Db: MSSQL
