---
sidebar_position: 0
title: Mes notes sur Docusaurus


---


# Quelques syntaxes ou astuces avec Docusaurus


## Les balises de type "alert"
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

### Changer le titre des balises

:::note[CHANGEMENT DU TITRE DE LA BALISE AVEC UNE `SYNTAXE` MARKDOWN!]

Some **content** with some _Markdown_ `syntax`.

:::

### Imbriquer les balises en rajoutant des `:`

:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

Deep child content

:::

::::

:::::

### Ajouter des onglets dans une balise avec MDX

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::


## Paramètres de page docs


### Modifier le niveau des titres qui s'affichent dans la table des matières
```yaml
---
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 5
---
```

## Afficher la tables des matières sur la page
```
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />
```

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Latex

### Dans le texte

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

### bloc de latex

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

## Boites dépliantes
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>


## blocs de code 
    
    ```jsx {1,3} showLineNumbers 
    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));

    ```