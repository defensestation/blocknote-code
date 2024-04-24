# Code block for Blocknote

![Stability Badge](https://img.shields.io/badge/stability-stable-green.svg)
![](https://badgen.net/badge/Version/v1.0.0/blue)

Code block for [Blocknote](https://www.blocknotejs.org/).

![](assets/demo.gif)

## Demo

[A demo is worth a thousand words](https://codesandbox.io/p/devbox/blocknote-code-kk2y4j?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvebdczr00072v6e9ufjvm7r%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvebdczq00022v6exqxznz0z%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvebdczq00042v6euh7qtl9x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvebdczq00062v6es5j51tw3%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvebdczq00022v6exqxznz0z%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvebdczp00012v6e7uf9tnwh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clvebdczq00022v6exqxznz0z%2522%252C%2522activeTabId%2522%253A%2522clvebdczp00012v6e7uf9tnwh%2522%257D%252C%2522clvebdczq00062v6es5j51tw3%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvebdczq00052v6eczn2qkhm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvebdczq00062v6es5j51tw3%2522%252C%2522activeTabId%2522%253A%2522clvebdczq00052v6eczn2qkhm%2522%257D%252C%2522clvebdczq00042v6euh7qtl9x%2522%253A%257B%2522id%2522%253A%2522clvebdczq00042v6euh7qtl9x%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvebdczq00032v6e4v1zufb8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clvebdczq00032v6e4v1zufb8%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Installation

### Install via YARN

Get the package

```shell
$ yarn add @defensestation/blocknote-code
```



## Usage

Include module at your application

```javascript
import { CodeBlock, insertCode } from "@defensestation/blocknote-code";
```

Create schema with code block.
```javascript
const schema = BlockNoteSchema.create({
   blockSpecs: {
    ...defaultBlockSpecs,
    procode: CodeBlock,
  },
});
```

Add slash menu item.
```javascript
<BlockNoteView
    editor={editor}
    slashMenu={false}
  >
    <SuggestionMenuController
      triggerCharacter={"/"}
      getItems={async (query) =>
        filterSuggestionItems(
          [...getDefaultReactSlashMenuItems(editor), insertCode()],
          query
        )
      }
    />
  </BlockNoteView>
```



