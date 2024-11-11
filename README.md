# Aztec Starter

This repo is created from the starter pack to demonstrate the buffer size issue in testing contracts

# Issue
```
Failed calling external resolver. RPC error response: RpcError { code: -32000, message: "Input buffer exceeds maximum size: got 3522 but max is 3000", data: None }
```
Reducing contract size fix the issue please refer to the "fix" branch