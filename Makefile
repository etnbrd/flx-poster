FILE = main
NAME = paper
PDFLATEX = mkdir -p .tmp && mkdir -p .tmp/figures && cd src && pdflatex -shell-escape --output-directory ../.tmp ../src/${FILE}.tex && mv ../.tmp/${FILE}.pdf ../${NAME}.pdf && cd ..
BIBER = mkdir -p .tmp && cd .tmp && biber ${FILE} && cd ..
.PHONY: all, bib, _main, _bib

all: pdf bib open

bib: _bib _post

pdf: _pre

clean:
	rm -rf .tmp;

open:
	xdg-open ${NAME}.pdf

_pre:
	${PDFLATEX}

_bib:
	${BIBER}

_post:
	${PDFLATEX}