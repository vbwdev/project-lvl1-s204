#!/usr/bin/env node
import { greeting, acquaintance, gameBrainEven } from '..';

greeting();
const userName = acquaintance();
gameBrainEven(userName);
