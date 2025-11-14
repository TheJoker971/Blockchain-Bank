# Blockchain Bank 🏦

Un projet de banque décentralisée construit avec **Clean Architecture** et des contrats intelligents Web3.

## 📋 Table des matières

- [À propos](#à-propos)
- [Architecture](#architecture)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Ressources](#ressources)

## À propos

**Blockchain Bank** est une application bancaire décentralisée qui intègre des contrats intelligents Solidity avec une architecture logicielle bien structurée suivant les principes de la **Clean Architecture**.

Ce projet séparant clairement la logique métier (domaine), les cas d'utilisation (application) et l'accès aux ressources externes (infrastructure), garantissant une maintenabilité, testabilité et extensibilité maximales.

## 🏗 Architecture

Le projet suit les principes de la **Clean Architecture** développée par Robert C. Martin, qui organise le code en couches concentriques :

```
┌─────────────────────────────────────────┐
│       User Interface / API               │
├─────────────────────────────────────────┤
│     Application (Use Cases)              │
├─────────────────────────────────────────┤
│        Domain (Business Logic)           │
├─────────────────────────────────────────┤
│     Infrastructure (Frameworks)          │
└─────────────────────────────────────────┘
```

### Avantages de cette approche :

- ✅ **Indépendance des frameworks** : La logique métier ne dépend pas des outils externes
- ✅ **Testabilité** : Facile à tester unitairement
- ✅ **Maintenabilité** : Code organisé et facile à comprendre
- ✅ **Flexibilité** : Changement facile des implémentations externes
- ✅ **Évolutivité** : Ajout de fonctionnalités sans réorganisation majeure

## 📦 Structure du projet

```
Blockchain-Bank/
├── domain/                          # Couche Domaine (cœur métier)
│   ├── entity/                      # Entités du domaine
│   ├── error/                       # Erreurs métier personnalisées
│   ├── value/                       # Objets de valeur
│   └── package.json
│
├── application/                     # Couche Application (cas d'utilisation)
│   ├── use-case/                    # Orchestration des cas d'utilisation
│   ├── repository/                  # Interfaces des dépôts (abstraction)
│   └── package.json
│
├── infrastructure/                  # Couche Infrastructure (implémentations)
│   └── [implémentations concrètes]
│
├── package.json                     # Dépendances racine
├── LICENSE                          # Licence ISC
└── README.md                        # Ce fichier
```

### 📄 Descriptions des couches

#### **Domain** (`domain/`)
La couche métier contient les règles de gestion pures, indépendantes de toute technologie.

- **`entity/`** : Entités qui représentent les concepts métier principaux
  - `Account` : Compte bancaire avec solde et propriétaire
  - `Transaction` : Historique des transactions
  - `User` : Utilisateur du système

- **`value/`** : Objets de valeur immuables et comparables par valeur
  - `Money` : Représentation typée du montant avec devise
  - `Balance` : Solde avec validation
  - `TransactionId` : Identifiant unique de transaction

- **`error/`** : Erreurs spécifiques au domaine
  - `InsufficientBalanceError` : Solde insuffisant
  - `InvalidAccountError` : Compte invalide
  - `UnauthorizedAccessError` : Accès non autorisé

#### **Application** (`application/`)
La couche application orchestre les interactions entre le domaine et l'infrastructure.

- **`use-case/`** : Cas d'utilisation métier
  - `CreateAccountUseCase` : Créer un nouveau compte
  - `DepositUseCase` : Déposer des fonds
  - `WithdrawUseCase` : Retirer des fonds
  - `TransferUseCase` : Transférer entre comptes
  - `GetBalanceUseCase` : Consulter le solde

- **`repository/`** : Interfaces pour accéder aux données (pattern Repository)
  - `IAccountRepository` : Interface pour gérer les comptes
  - `ITransactionRepository` : Interface pour l'historique
  - `IUserRepository` : Interface pour les utilisateurs

#### **Infrastructure** (`infrastructure/`)
La couche infrastructure implémente les détails techniques et accède aux ressources externes.

- **Implémentations Blockchain** : Intégration avec les contrats intelligents
- **Base de données** : Persistance des données (optionnel, si centralisée)
- **Web3 Provider** : Connexion avec Ethereum/blockchain
- **Repositories concrètes** : Implémentations des interfaces du domaine

### 🔗 Contrats Intelligents

Les contrats intelligents sont stockés dans le dépôt séparé [Bank-Web3-contracts](https://github.com/TheJoker971/Bank-Web3-contracts) et contiennent :

- **Smart Contracts Solidity** : Logique métier blockchain
  - Gestion des comptes (création, dépôt, retrait)
  - Transferts entre comptes
  - Gestion des permissions
  - Historique des transactions

- **Tests Foundry** : Tests unitaires et d'intégration
- **Scripts de déploiement** : Déploiement sur testnet/mainnet

**Intégration** : L'application JavaScript communique avec ces contrats via Web3.js ou Ethers.js.

## 🚀 Installation

### Prérequis
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/TheJoker971/Blockchain-Bank.git
   cd Blockchain-Bank
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement** (si nécessaire)
   ```bash
   cp .env.example .env.local
   # Configurer les variables d'environnement
   ```

## 💡 Utilisation

### Structure des packages

Le projet utilise **workspaces npm** pour gérer les packages :

```bash
# Installer dans tous les workspaces
npm install

# Installer dans un workspace spécifique
npm install --workspace=domain
npm install --workspace=application

# Exécuter un script dans un workspace
npm run --workspace=application test
```

### Exemple de flux métier

```typescript
// 1. Créer un compte (Use Case)
const createAccountUseCase = new CreateAccountUseCase(accountRepository);
const account = await createAccountUseCase.execute({
  userId: "user123",
  initialBalance: new Money(1000, "USD")
});

// 2. Effectuer un dépôt
const depositUseCase = new DepositUseCase(accountRepository);
await depositUseCase.execute({
  accountId: account.id,
  amount: new Money(500, "USD")
});

// 3. Effectuer un transfert
const transferUseCase = new TransferUseCase(accountRepository, transactionRepository);
await transferUseCase.execute({
  fromAccountId: account.id,
  toAccountId: "account456",
  amount: new Money(200, "USD")
});
```

## 📚 Ressources

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Bank-Web3-Contracts](https://github.com/TheJoker971/Bank-Web3-contracts)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Foundry Book](https://book.getfoundry.sh/)

## 📝 Licence

Ce projet est sous licence **GNU Affero General Public License v3.0 (AGPL-3.0)**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

- **jsegor** - [GitHub Profile](https://github.com/TheJoker971)

---

**Blockchain Bank** © 2025 - Projet de banque décentralisée avec Clean Architecture
