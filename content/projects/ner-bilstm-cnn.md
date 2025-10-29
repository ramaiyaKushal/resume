---
title: Named Entity Recognition (NER) — BiLSTM-CNN PyTorch
---
## Named Entity Recognition (NER) — BiLSTM-CNN PyTorch
**Tech:** Python, PyTorch, NLP, BiLSTM, CNN, CRF, GloVe, Named Entity Recognition

**Overview:** Implemented a robust NER system that extracts named entities from raw text using a modern sequence-labeling pipeline combining pretrained GloVe embeddings, character-level CNNs, and a bidirectional LSTM. The system is trained and evaluated on the CoNLL-2003 English NER dataset.

**Highlights**
- **Architecture:** Character CNNs + BiLSTM
- **Embeddings:** GloVe-based word vectors for better lexical generalization
- **Data:** CoNLL-2003 (BIO tags); code prepares padding, batching, and character inputs
- **Framework:** PyTorch training scripts and Jupyter notebook
- **Artifacts:** Runnable notebook, saved model weights, and prediction files for evaluation

**Results:** The pipeline reproduces strong baselines with typical dev/test F1 scores of ~0.90 / ~0.85 when fully trained.

**Try it out:** Replace `"Welcome to America"` with your own text.

```bash
curl -s -X POST \
  "https://ramaiyakushal-ner-app--ner-model-api-predict-web.modal.run" \
  -H "Content-Type: application/json" \
  -d '{"text": "Welcome to America"}' \
  | python3 -m json.tool
```
