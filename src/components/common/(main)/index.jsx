import ArticleList from "./(article)/ArticleList";
import SectionList from "./(section)/SectionList";

function MainList() {
  return (
    <>
      <div className="justify-center bg-[#E5E5E5] h-[1800px]">
        <SectionList />
        <ArticleList />
      </div>
    </>
  );
}

export default MainList;
