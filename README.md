# NeatFi Protocol 

The contracts and contract tests for the NeatFi protocol, built with [Hardhat](https://hardhat.org/)

## Writing tests

This section covers writing tests for the contracts

### Running the tests

The tests are running against a local running hardhat node, so make
sure to start it before running the tests. It is recommended to setup the [Hardhat CLI](https://hardhat.org/) as global.

1. Run the hardhat node `hh node`
2. Use the `hh test` command to run the tests

Since the tests are running against a local running node, their performance isn't ideal, it might take 10 seconds to run even
the smallest suite, so it would be recommended to also pass the path of the testing file to the command.


### Folder structure

The tests are mimicking the folder structure of the contracts folder.

