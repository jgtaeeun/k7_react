export default function GelleryCard({imgurl, title, content, htag}) {

  const htags= (htag.includes(',') ? htag.split(',') : [htag])
                    .map(item=> <span key={item} className="inline-block bg-gray-200 rounded-full px-3
                                                 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>)
  


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgurl.includes('http:')?imgurl.replace('http:','https:'):imgurl}
                                 alt={title}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {content}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {htags}
        </div>
    </div>
  )
}
