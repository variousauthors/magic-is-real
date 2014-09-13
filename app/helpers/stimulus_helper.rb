
module StimulusHelper

  # process the content so that the links and details are anchored
  # TODO tokenize the content around details and links,
  # and then replace them individually with the anchors,
  # and then stitch them back together. Otherwise we are gradually
  # mutating the string, which may introduce errors if for example
  # a detail's key is "passage" or "href".
  def to_html
    html = content

    links.each do |link|
      html.gsub!(link.key, "<a href='/passages/#{ link.passage_id }' class='link'>#{ link.key }</a>")
    end

    html.html_safe
  end
end
