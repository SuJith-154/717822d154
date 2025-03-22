from fastapi import FastAPI, HTTPException
from typing import List
import random

app = FastAPI()

# Functions to generate numbers
def generate_prime_numbers(n: int) -> List[int]:
    primes = []
    num = 2
    while len(primes) < n:
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                break
        else:
            primes.append(num)
        num += 1
    return primes

def generate_fibonacci_numbers(n: int) -> List[int]:
    fib = [0, 1]
    for _ in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib[:n]

def generate_even_numbers(n: int) -> List[int]:
    return [x for x in range(2, 2 * n + 1, 2)]

def generate_random_numbers(n: int) -> List[int]:
    return [random.randint(1, 100) for _ in range(n)]

# Endpoints for each action
@app.get("/test/primes")
async def get_primes(count: int = 5):
    primes = generate_prime_numbers(count)
    return {"action": "primes", "numbers": primes}

@app.get("/test/fibonacci")
async def get_fibonacci(count: int = 5):
    fibonacci = generate_fibonacci_numbers(count)
    return {"action": "fibonacci", "numbers": fibonacci}

@app.get("/test/even")
async def get_even(count: int = 5):
    even_numbers = generate_even_numbers(count)
    return {"action": "even", "numbers": even_numbers}

@app.get("/test/random")
async def get_random(count: int = 5):
    random_numbers = generate_random_numbers(count)
    return {"action": "random", "numbers": random_numbers}