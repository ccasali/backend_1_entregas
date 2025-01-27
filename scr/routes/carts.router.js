import { Router } from "express"
import fs from 'fs/promises'
import path from 'path'

const pathCarts = path.resolve('db', 'carts.json')