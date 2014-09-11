# Based on this SO answer: http://stackoverflow.com/a/17172632/29182

ActionView::Template.register_template_handler(:rb, :source.to_proc)
