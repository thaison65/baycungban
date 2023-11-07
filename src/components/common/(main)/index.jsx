import ArticleList from "./(article)/ArticleList";
import SectionList from "./(section)/SectionList";

function MainList() {
  return (
    <>
      <div>
        <SectionList />
        <ArticleList />
      </div>
    </>
  );
}

export default MainList;
