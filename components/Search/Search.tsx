import React, { HTMLAttributes, useState } from "react";
import styles from "./Search.module.css";
import classNames from "classnames";
import { ButtonIcon, Input } from "..";
import { SearchIcon } from "../../public/icons/SearchIcon";
import { useRouter } from "next/router";

export const Search: React.FC<HTMLAttributes<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <form
      className={classNames(className, styles.search)}
      {...props}
      role="search"
    >
      <Input
        className={styles.searchInput}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ButtonIcon
        appearance="primary"
        className={styles.searchBtn}
        onClick={goToSearch}
        icon="SearchIcon"
        aria-label="Искать по сайту"
      >
        <SearchIcon />
      </ButtonIcon>
    </form>
  );
};
