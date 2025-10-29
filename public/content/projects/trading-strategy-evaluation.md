---
title: Strategy Evaluation — Manual vs. Machine Learning Trading System
---
## Strategy Evaluation: Manual vs. Machine Learning Trading System
**Tech:** Python, Machine Learning, Q-Learning, Reinforcement Learning, Backtesting, Hyperparameter Optimization, Financial Analysis  
**Link:** [Project Slides](/resume/Project8.pdf)

**Project Summary:** Developed and compared two algorithmic trading strategies for JPM stock using technical indicators (MACD, Bollinger Bands, Momentum). Implemented a manual rule-based strategy and a Q-Learning reinforcement learning model, evaluating performance across in-sample (2008–2009) and out-of-sample (2010–2011) periods with realistic transaction costs.

**Key Achievements**
- Designed a Q-Learning agent that achieved 242% cumulative return in-sample vs. 25% for manual strategy and 1% for benchmark.
- Implemented a discretized state space (1000 states) using normalized and binned technical indicators to enable efficient reinforcement learning.
- Conducted hyperparameter optimization through grid search across 2,500+ parameter combinations.
- Analyzed impact of market friction on trading behavior, demonstrating inverse relationship between impact values and trade frequency.
- Built complete backtesting framework with portfolio simulation accounting for commission ($9.95/trade) and market impact (0.5%).

**Key Insight:** While the Q-Learner significantly outperformed during training, both strategies struggled in out-of-sample testing, highlighting the importance of model generalization and the challenges of overfitting in financial machine learning applications.
