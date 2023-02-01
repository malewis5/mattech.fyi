import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export const ArticleList = ({ articles }) => {
  return (
    <div className="flex flex-col gap-16">
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  )
}
