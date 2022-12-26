---
language: eng
license: mit
dataset: Logical Fallacy Dataset
---

# distilbert-base-fallacy-classification

This is a repository for a Flask web-app hosted on [Replit](https://Fallacy-Classification.kyutifer.repl.co) that implements the [distilbert-base-fallacy-classification model](https://huggingface.co/q3fer/distilbert-base-fallacy-classification). The model is a fine-tuned version of [distilbert-base-uncased](https://huggingface.co/distilbert-base-uncased) for text classification of logical fallacies. There are a total of 14 classes: ad hominem, ad populum, appeal to emotion, circular reasoning, equivocation, fallacy of credibility, fallacy of extension, fallacy of logic, fallacy of relevance, false causality, false dilemma, faulty generalization, intentional, and miscellaneous.

## Training and evaluation data

The [Logical Fallacy Dataset](https://github.com/causalNLP/logical-fallacy) is used for training and evaluation.

Jin, Z., Lalwani, A., Vaidhya, T., Shen, X., Ding, Y., Lyu, Z., ... Schölkopf, B. (2022). Logical Fallacy Detection. arXiv. https://doi.org/10.48550/arxiv.2202.13758

## Training procedure

The following hyperparameters were used during fine-tuning:

- learning_rate : 2e-5
- warmup steps : 0
- batch_size: 16
- num_epochs: 8
- batches_per_epoch: 122
- total_train_steps: 976
