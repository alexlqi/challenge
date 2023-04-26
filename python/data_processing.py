import pandas as pd

def read_csv_file(input_file):
    try:
        df = pd.read_csv(input_file)
        return df
    except Exception as e:
        print(e)

def filter_data_by_age(df, min_age=30):
    return df[df["Age"] >= min_age]

def add_is_adult_column(df):
    df["IsAdult"] = df["Age"].apply(lambda Age: "true" if Age >= 18 else "false")
    return df

def write_csv_file(df, output_file):
    try:
        df.to_csv(output_file, index=False)
    except Exception as e:
        print(e)

def main():
    input_file = "input.csv"
    output_file = "output.csv"
    
    try:
        df = read_csv_file(input_file)
        df = filter_data_by_age(df)
        df = add_is_adult_column(df)
        write_csv_file(df, output_file)
    except Exception as e:
        print(e)

if __name__ == '__main__':
    main()