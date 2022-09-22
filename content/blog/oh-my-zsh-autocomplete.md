---
path: Oh My Zsh Autocomplete
date: 2022-09-22T22:08:34.196Z
title: Oh My Zsh Autocomplete
description: Setting up autocomplete for oh my zsh
---
### O﻿h My Zsh 

I﻿f you are not familiar with zsh in your workflow I highly recommend it. It's an open source tool for managing Zsh configuration. Using a normal Bash window some things such as autocomplete may be available out of the box which is nice but I feel like Zsh provides a lot and is nicer to use but there is some initial set up. 

I﻿ am more or less creating this post so that I can remind myself on how to configure this since I quite often have to set up new machines. 

### S﻿et up

C﻿lone the zsh-autocomplete plugin

```shell
sudo git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```



### E﻿dit the zshrc file

N﻿ext step is to add the plugin to the zshrc file 

```
vim ~/.zshrc

plugins = (
  // List of plugins here
  zsh-autosuggestions
)
```

A﻿fter restarting your terminal zsh autocomplete should be working 🎉

A﻿t some point I will eventually create a github repository on machine set up for the tools I use most often but maybe these short tutorials can be helpful for quickly getting things going.