FROM homebrew/ubuntu20.04
SHELL ["/bin/bash", "-c"]
RUN brew install nvm && \
    mkdir ~/.nvm && \
    echo export NVM_DIR="$HOME/.nvm" >> ~/.bash_profile && \
    echo "[ -s "/home/linuxbrew/.linuxbrew/opt/nvm/nvm.sh" ] && . "/home/linuxbrew/.linuxbrew/opt/nvm/nvm.sh"" >> ~/.bash_profile && \
    echo "[ -s "/home/linuxbrew/.linuxbrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/home/linuxbrew/.linuxbrew/opt/nvm/etc/bash_completion.d/nvm"" >> ~/.bash_profile && \
    source ~/.bash_profile && \
    nvm install --lts && \
    brew install swagger-codegen
